import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Sidebar from "../components/pages/Sidebar.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Sidebar">
                <Sidebar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews