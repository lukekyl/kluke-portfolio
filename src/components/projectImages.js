import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */



const query = (props) => {
  let project = props.project 
 
  const data = graphql`
    query allImgsQuery {    
      //additional queries    
      ... ProjectImgs: allFile(      
        sort: { order: ASC, fields: [absolutePath] }      
        filter: { relativePath: { regex: "/projects/${project}/.*.jpg/" } }    
        ) 
        {      
          edges {        
            node {          
              relativePath          
              name          
              childImageSharp {            
                sizes(maxWidth: 320) 
                {              
                  ...GatsbyImageSharpSizes            
                }          
              }        
            }      
          }    
        }
        //additional queries...  
    }
    `;
   return data
}

export default query



// render() { 
//   const projectImgs = this.props.projectImgs; 
//   const { selectedType } = this.state; 
  
//   return (
//     <section id="projects" className="section projects">        
//     <h2 className="text-center">PROJECTS</h2>        
//     <div className="section-content">          
//     <div className="subheader">            
//       <FormGroup controlId="formControlsSelect">             ...            </FormGroup>          
//     </div>          
//     <div className="project-list">            
//       {projectList.map(project => { 
//         const isSelectedType = selectedType === project.type; 
//         const singleCardClass = classNames("single-card", { hide: !isSelectedType }); 
//         const image = projectImgs.find(n => { return n.node.relativePath === `projects/${project.img}`; }); 
//         const imageSizes = image.node.childImageSharp.sizes; 
//         return (
//           <a href={project.url} key={project.url} className={singleCardClass} target="_blank">
//           <div className="card-img">                    
//             <Img title={project.name} alt="Screenshot of Project" sizes={imageSizes} className="card-img_src center-block" />
//           </div>
//           <div className="blue-divider" />                  
//           <div className="card-info">                    
//           <h4 className="card-name">{project.name}</h4>                    
//           <p>{project.description}</p>                  
//           </div>                
//           </a>); 
//         })
//       }          
//     </div>      
//     </div>      
//     </section>
//   ); 
// }}
