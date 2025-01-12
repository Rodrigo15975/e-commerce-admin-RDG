import { FC, PropsWithChildren } from "react"

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <article className="xl:ml-80">{children}</article>
    </>
  )
}

export default Container
