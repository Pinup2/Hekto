import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Sidebar from "../components/pages/Sidebar.tsx";
import FilterComponent from "../components/pages_components/FilterComponent.js";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Sidebar">
                <Sidebar/>
            </ComponentPreview>
            <ComponentPreview path="/FilterComponent">
                <FilterComponent/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews