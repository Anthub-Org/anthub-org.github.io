"use client"

import { useEffect } from "react"

type DocumentMetadataProps = {
  title: string
  description?: string
  generator?: string
}

function setMetaContent(name: string, content?: string) {
  const selector = `meta[name="${name}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!content) {
    tag?.remove()
    return
  }

  if (!tag) {
    tag = document.createElement("meta")
    tag.name = name
    document.head.appendChild(tag)
  }

  tag.content = content
}

export function DocumentMetadata({ title, description, generator }: DocumentMetadataProps) {
  useEffect(() => {
    document.title = title
    setMetaContent("description", description)
    setMetaContent("generator", generator)
  }, [description, generator, title])

  return null
}
