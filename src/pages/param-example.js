import { useParams } from "react-router-dom";

export const ParamExample = () => {
    const params = useParams();
    console.log(params);
    return <div>
        <div>Param 1: {params.xloopParam}</div>
        <div>Param 2: {params.secondXloopParam}</div>
        <div>Param 3: {params.thirdXloopParam}</div>

        </div>;
}