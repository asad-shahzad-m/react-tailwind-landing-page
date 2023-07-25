import clsx from 'clsx'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

// display: block;
// object-fit: cover;
// width: 100%;
// height: 100%;
// border-radius: inherit;

const Image = (props: ImageProps) => {
    const { src, className, ...rest } = props
    return (
        <div className={clsx('overflow-hidden', className)}>
            <img
                src={src}
                className="object-inherit block w-full h-full"
                {...rest}
            />
        </div>
    )
}

export default Image
