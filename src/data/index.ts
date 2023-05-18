export type ContentType = {
  id: number,
  name : string,
  title: string,
  description: string,
  logo ?: string
}

export type CompoDataTypes = {
    title: string,
    description: string,
    slug: string,
    id: number, 
    parent: string,
    meta: { title : string },
    permission?: {
        guest: boolean,
        login: boolean, 
        role : null | string
    },
    layout: string,
    content: ContentType[],
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
    title : "Page generator"
  },
    permission: {
        guest: true,
        login: true,
        role : null
  },
  content: [
    { id: 1, name: "navbar", title: "CDDA", description: "", logo : "" },
    { id: 2, name: "content", title: "This is content 1", description: "Lorem ipsum to be added" },
  ],
  faqs: "Ask me something",
  tour: []
};