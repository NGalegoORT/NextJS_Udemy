import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
    children
}:{
    children: React.ReactNode;
}){
    return (
        <>
        <Navbar />
        <div>
            <h1>Hello Root Layout About</h1>
            {children}
        </div>
        </>
    )
};