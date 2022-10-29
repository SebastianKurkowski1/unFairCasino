import {Footer} from "flowbite-react";
import {Github, Linkedin} from "react-bootstrap-icons"

export default function CustomFooter() {
    return (
        <footer style={{marginTop: "auto"}}>
            <div className="w-full">
                <div className="w-full bg-gray-700 py-3 px-4 sm:flex sm:items-center sm:justify-center">
                    <div className="w-full sm:flex sm:items-center sm:justify-evenly justify-center text-center">
                        <Footer.Copyright
                            href="#"
                            by="Copyright free made for recruitment process by Sebastian Kurkowski"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
                            <Footer.Icon
                                href={'https://github.com/SebastianKurkowski1'}
                                icon={Github}/>
                            <Footer.Icon
                                icon={Linkedin} target={"_blank"}
                                href={"https://www.linkedin.com/in/sebastian-kurkowski-b06862207/"}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
