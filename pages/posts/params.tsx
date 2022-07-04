export interface ParamsPageProps {}

export default function ParamsPage(props: ParamsPageProps) {
    return (
        <>
            <div>Params Page</div>
        </>
    )
}

export async function getServerSideProps() {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    return {
        props: {}
    }
}