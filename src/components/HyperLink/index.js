import Link from "next/link";

export default function HyperLink({ children, href }) {
    return (
        <>
            <Link href={href}>
                <span>{children}</span>
            </Link>

            <style jsx>{`
                span{
                    color: #3A3A3A;
                    text-align: center;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    text-decoration: none;     
                    padding:5px 10px;                   
                }

                `}</style>
        </>
    )
}