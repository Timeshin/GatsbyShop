import { FC, ReactNode } from 'react'

interface IMainLayout {
	children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => (
	<main className='flex justify-center items-start p-10 w-screen h-screen'>{children}</main>
)

export default MainLayout
