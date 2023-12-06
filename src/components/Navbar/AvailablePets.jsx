import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { usePet } from "../../utilities/PetContext"

export default function AvailablePets() {
    const { homePets } = usePet();
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        if (homePets) {
            console.log(homePets)
            const dogArray = homePets.filter(pet => pet.species === 'Dog');
            setDogs(dogArray)
            const catArray = homePets.filter(pet => pet.species === 'Cat');
            setCats(catArray)
        }
    }, [homePets]);

    return (
        <div className="w-full h-screen">
            <h1>Find A Pet</h1>
            <div className="flex gap-10 m-10 ">
            </div>
            {/* <div>
                <h2>Available cats</h2>
                {dogs.map((dog) => (
                    <div key={dog.id}>
                        <img 
                            src={dog.photos.length > 0 && dog.photos[0].small} 
                            alt={dog.name} 
                            style={{ maxWidth: '100px'}} 
                        />
                        <Link to={`/adoption/${dog.id}`}>{dog.name}</Link>
                        <p>{dog.age}</p>
                    </div>
                    

                ))}

            </div>
            
            <div>
                <h2>Available Cats</h2>
                {cats.map((cat) => (
                    <div key={cat.id}>
                        <img 
                            src={cat.photos.length > 0 && cat.photos[0].small} 
                            alt={cat.name} 
                            style={{ maxWidth: '100px'}} 
                        />
                        <Link to={`/adoption/${cat.id}`}>{cat.name}</Link>
                        <p>{cat.age}</p>
                    </div>
                    

                ))}

            </div> */}
            
        </div>
        );
}
