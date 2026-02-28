import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { useSearchContext } from "@/context/search-context";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ChartInputSearch() {
    const {
        changeTag
    } = useSearchContext()

    const [text, setText] = useState("")

    const appoint = (text) => {
        console.log("appoint получил text: ", text)
        changeTag(text)
    }

    return (
        <div>
            <InputGroup
                className="text-white text-[20px] font-semibold"
            >
                <InputGroupInput
                    placeholder="Тег..."
                    onChange={(e) => setText(e.target.value)}
                    className="text-white text-[20px] font-semibold"
                />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        aria-label="search"
                        title="Поиск"
                        onClick={() => appoint(text)}
                        variant="secondary"
                    >
                        <Search />
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}