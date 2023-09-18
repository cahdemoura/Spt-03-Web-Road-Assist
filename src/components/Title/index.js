export default function TitleH1({ children, tag, textAlign, color,blockSize}) {
    const Tag = tag
    return (
        <div>
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

                div{
                    max-width:100%;
                }
                `}</style>
        </div>
    )
}