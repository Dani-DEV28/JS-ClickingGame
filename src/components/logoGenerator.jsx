export default function logoGenerator({ logoArray, spining }) {
    return(      
        <div>
            {logoArray.map((logo, i) => (
            <img key={i} src= {logo} className= {`logo ${spining ? "spin" : ""}`} alt={`logo-${i}`} />
            ))}
        </div>
    );
}