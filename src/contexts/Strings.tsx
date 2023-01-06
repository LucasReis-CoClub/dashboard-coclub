import React, { useEffect } from 'react'
import { ProjectsGroups, SourceStrings, StringTranslations } from '@crowdin/crowdin-api-client'

import useTagsHandler from 'hooks/tagsHandler'
import usePersist from 'hooks/persist'
import useState from 'hooks/state'

import Store from './Store'

interface IGenericType {
  [key: string]: any
}

export interface ISession {
  token: string
}

interface IStringsValues {
  setStrings: (value: IGenericType) => void
  translate: (identifier: string) => string
  values: IGenericType
}

interface AppStringType { lang: string, data: any[] }

const StringsContext = React.createContext<IStringsValues | null>(null)

const StringsProvider: React.FC<{ children: any }> = ({ children }) => {
  const [state, setState] = useState<IGenericType>()
  const { setStore } = Store.useStore()

  const { persistedData } = usePersist()

  const [stringsLoaded, setStringsLoaded] = useState(false)

  const { handleTags } = useTagsHandler()

  useEffect(() => {
    if (persistedData?.language) {
      setStore({ language: persistedData?.language })
    } else {
      setStore({ language: DEFAULT_LANGUAGE })
    }

    (async () => {
      await loadStrings()

      setStringsLoaded(true)
    })()
  }, [])

  let DEFAULT_LANGUAGE = navigator.language

  DEFAULT_LANGUAGE = DEFAULT_LANGUAGE.includes('pt') ? 'pt-BR' : 'en'

  const tokenCrowdin = process.env.REACT_APP_TOKEN_CROWDIN ?? ''
  const projectsGroupsApi = new ProjectsGroups({
    token: tokenCrowdin
  })
  const sourceStringsApi = new SourceStrings({
    token: tokenCrowdin
  })
  const stringTranslationsApi = new StringTranslations({
    token: tokenCrowdin
  })

  const getStringTranslated = (id: string) => {
    let string = ''
    let stringsData = state?.appStrings

    if (!stringsLoaded) {
      try {
        stringsData = JSON.parse(localStorage.getItem('coclub-appStrings') ?? '')
      } catch (e) {
        console.log(e)
      }
    }

    stringsData?.map((item: any) => {
      if (item.lang === (persistedData?.language ?? DEFAULT_LANGUAGE)) {
        item.data.map((stringItem: any) => {
          if (stringItem.identifier === id) {
            string = stringItem.value
          }
        })
      }
    })

    return handleTags(string)
  }

  const loadStrings = async (): Promise<void> => {
    let projects: any
    try {
      projects = await projectsGroupsApi.withFetchAll().listProjects()
    } catch (e) {
      console.log(e)
    }

    if (projects?.data && projects?.data?.length) {
      try {
        const idProject = projects.data[0].data.id
        const targetLanguages = projects.data[0].data.targetLanguageIds
        const sourceString = await sourceStringsApi.withFetchAll().listProjectStrings(idProject)

        const appStrings: AppStringType[] = [{ lang: DEFAULT_LANGUAGE, data: [] }]

        sourceString.data.map((item) => {
          appStrings[0].data.push({
            id: item.data.id,
            identifier: getCleanId(item.data.identifier),
            value: item.data.text
          })
        })

        for (let i = 0; i < targetLanguages.length; i++) {
          const lang = targetLanguages[i]
          const translatedStrings: AppStringType = { lang, data: [] }
          translatedStrings.lang = lang
          const translateList = await stringTranslationsApi.withFetchAll().listLanguageTranslations(idProject, lang)

          translateList.data.map((item: any, key) => {
            const aux = appStrings[0].data.find((item2) => item2?.id === item?.data?.stringId)
            translatedStrings.data.push({ id: aux?.id, identifier: aux?.identifier, value: item?.data?.text })
          })

          appStrings.push(translatedStrings)
        }

        localStorage.setItem('coclub-appStrings', JSON.stringify(appStrings))
        setState({ appStrings })
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        const appStrings = JSON.parse(localStorage.getItem('coclub-appStrings') ?? '')
        setState({ appStrings })
      } catch (e) {
        console.log(e)
      }
    }
  }

  const getCleanId = (id: string) => {
    const arrId = id.split('.')
    return arrId[arrId.length - 1]
  }

  const value = {
    setStrings: (values: IGenericType) => setState(values),
    translate: (identifier: string) => getStringTranslated(identifier),
    values: state
  }

  return <StringsContext.Provider value={value}>{children}</StringsContext.Provider>
}

export default {
  Provider: StringsProvider,
  Context: StringsContext,
  useStrings: (): IStringsValues => React.useContext(StringsContext) as IStringsValues
}
