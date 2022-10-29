import {Sidebar} from "flowbite-react";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid"
import {ArrowLeftCircle, ArrowRightCircle, IconProps, Fire, SuitSpadeFill} from "react-bootstrap-icons"
import {FC, useState} from "react";

interface sideBarStateProps {
    collapsed: boolean,
    icon: FC<IconProps>,
    label: string
}

export default function CustomSidebar() {
    function setActiveLink (path: string) {
        return path === window.location.pathname;
    }

    const [sidebarState, changeSidebarState] = useState<sideBarStateProps>({
        collapsed: true,
        icon: ArrowRightCircle,
        label: "Expand menu"
    });


    return (
        <div className="w-fit h-full relative hidden md:block">
            <div>
                <Sidebar
                    aria-label="Default sidebar example"
                    collapsed={sidebarState.collapsed}
                >
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={ sidebarState.icon }
                                onClick={() => {
                                    const newSidebarState = {} as sideBarStateProps;
                                    if (sidebarState.collapsed) {
                                        newSidebarState.label = "Collapse menu";
                                        newSidebarState.collapsed = false;
                                        newSidebarState.icon = ArrowLeftCircle;
                                    } else {
                                        newSidebarState.label = "Expand menu";
                                        newSidebarState.collapsed = true;
                                        newSidebarState.icon = ArrowRightCircle;
                                    }
                                    changeSidebarState(newSidebarState);
                                }}
                            >
                                {sidebarState.label}
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/slots"
                                icon={ AdjustmentsVerticalIcon }
                                active={setActiveLink('/slots')}
                            >
                                Slots
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/fire"
                                icon={ Fire }
                                active={setActiveLink('/fire')}
                            >
                                Watch out fire!
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/blackjack"
                                icon={ SuitSpadeFill }
                                active={setActiveLink('/blackjack')}
                            >
                                Blackjack
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    )
}