import { useAppContext} from "./context";

function Add() {
    const { add } = useAppContext();


        console.log(add(10, 12))

    // console.log(add(10, 12));
    return(
        <div></div>
    )
}

export default Add;