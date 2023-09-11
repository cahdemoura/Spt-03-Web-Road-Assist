export default function TitleH1({ children, tag, textAlign, color }) {
    const Tag = tag
    return (
        <>
            <Tag>{children}</Tag>

            <style jsx>{`
                ${Tag}{
                    color: ${color};
                    text-align:${textAlign};
                    font-family: Raleway;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal; 
                }
                `}</style>
        </>
    )
}