import clsx from 'clsx'

const Ornament = (props: any) => {
    const { className } = props
    return (
        <div
            className={clsx('w-32 h-32 bg-black -z-20 top-0 left-0', className)}
        ></div>
    )
}

export default Ornament
