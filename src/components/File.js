import './File.css'


const File = ({project}) =>{
    return(
        <div className='piece'>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={`www.github.com/samejima-san/${project.name}`}>{`www.github.com/samejima-san/${project.name}`}</a>
        </div>
    );
}

export default File;