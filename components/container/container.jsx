import style from './container.module.scss'

const Container = ({children}) => {
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}


export default Container