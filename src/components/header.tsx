type HeaderPropsType = {
    pages: {
        name: string;
        to: string;
    }[];
};

export const HeaderComponent = ({pages}: HeaderPropsType): JSX.Element => {
    return <header className="flex justify-center pt-4 bg-[#20222C]">
        <nav className="flex gap-2">
            {
                pages.map(page => {
                    return <a className="text-white hover:text-[#4B0ABA]" key={page.name} href={`#${page.to}`}>{page.name}</a>
                })
            }
        </nav>
    </header>
}

export default HeaderComponent;