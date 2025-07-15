import Button from "@/components/Button";
import Card from "@/components/Card";


const Landing = () =>{

    return(
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
            <Card />
            <Button
            title="Style button"
            styles={{size:"large" , shape:"rounded-full"}}
            />
        </div>
    )
}

export default Landing;