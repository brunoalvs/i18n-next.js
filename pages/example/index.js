export default function Teste(props) {
return (
    <>
        <p>Current locale: {props.locale}</p>
    </>
)
}

export const getStaticProps = ({ locale, locales}) => {
    return {
        props: {
            locale,
            locales
        }
    }
}