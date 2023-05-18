export type CompoDataTypes = {
    title: string,
    description: string,
    slug: string,
    id: number, 
    parent: string,
    meta: {},
    permission?: {
        guest: boolean,
        login: boolean, 
        role : null | string
    },
    layout: string,
    content: string[],
    faqs: string,
    tour ?: {}[]
}

export const compoData : CompoDataTypes = {
  title: "Page generator",
  description: "Page testing",
  slug: "/content",
  id: 1,
  layout: "layout",
  parent: "empty",
  meta: {
    
  },
    permission: {
        guest: true,
        login: true,
        role : null
  },

  content: ["navbar","content"],
  faqs: "Ask me something",
  tour: []
};