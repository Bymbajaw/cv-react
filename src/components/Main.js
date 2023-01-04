import Button from "./Button"

const Tech = ({techskill}) => {
    return(
        <ul>
            {techskill.map((e) => (
                <li> {e} </li>
            ))}
        </ul>
    )
}


const UserCard = ({img, firstname, lastname}) => {
    return(
        <div>
            <img src={
                img
                    ? img
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57w-w8FOAwcG75vA6zKu447HtGgz51uoEeQ&usqp=CAU"
            } alt="" 
            width={250}
        
            />
            <h4>
                {firstname} {lastname}
            </h4>
        </div>
    )
}





export default function Main ({user, techskill, greetPeople, showDate}) {

    const userInfo = {...user, img: ""}



    const users = [
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpXIKZs5ECeSndN1HGUEA6B1kxrIsp2V_UQ&usqp=CAU", firstname:"Bold", lastname:"Dulam",},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpXIKZs5ECeSndN1HGUEA6B1kxrIsp2V_UQ&usqp=CAU", firstname:"Dorj", lastname:"Pagma",},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyzAT-K4vq9i94N0B5_N2RJteGwxzZTQWcQ&usqp=CAU", firstname:"Tuya", lastname:"Luuyaa",},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VV4yh_ZVigu5atlBzWJ-o9R_aJx9Epzwxw&usqp=CAU", firstname:"Enkh", lastname:"Delger",},
    ]

   
    return(
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techskill={techskill} />
                <UserCard {...userInfo} />

                {
                    users.map((userInfo) => {
                        return <UserCard {...userInfo} />;
                    })
                }

                <Button text="Greet People" status={true} func={greetPeople} />
                <Button text="Show Date" status={false} func={greetPeople} />
            </div>
        </div>
    )
}