import css from "./Button.module.css"




export const Button = ({ onClick }) => {
    window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
    });
    return (
        <button type="button" className={css.Button} onClick={onClick}>Load more</button>
    )
}