export type CompoDataTypes = {
    title: string,
    description: string,
    slug: string,
    id: number, 
    parent: string,
    meta: string,
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
  title: "Foo",
  description: "Foo bar testing",
  slug: "/foo",
  id: 1,
  parent: "foo",
  meta: "",
    permission: {
        guest: true,
        login: true,
        role : null
  },
  layout: "fooBar",
  content: ["bar","foo"],
  faqs: "Ask me something",
  tour: []
};