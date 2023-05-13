import React, { useEffect, useState } from "react";
import File from "./File";
import homeLogo from "../svg/home.svg";
import { Link } from "react-router-dom";
import './Projects.css';
import { Octokit } from "octokit";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const octokit = new Octokit({ auth: process.env.api_key });

    //sync function to get repos
    async function getRepos() {
        const res = await octokit.request('GET /users/{username}/repos', {
            username: 'samejima-san'
        });
        return res.data;
    }

    async function fetchData() {
        try {
          const data = await getRepos();
          setProjects(data);
        } catch (error) {
          console.error(error);
        }
      }


    //use effect
    useEffect(() => {
        //get repos
        fetchData();
    }, []);
        

    return(
        <div className="center"> 
            <Link to="/"><img src={homeLogo}/></Link>
            {
                //loading if projects is empty or map projects to File component
                projects.length > 0 ? projects.map((project) => (
                    <File project={project} />
                )) : <h1>Loading...</h1>  

                 
            }
        </div>
    );
};

export default Projects;