import React from "react";
import "../App.css";
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';

function btnClickUFEngineering() {
    window.location = "UFEngineering";
  }

const UFCSEClasses = () => {
    return  (
        <div classNAme="app-container">
        <h1>UF CSE Classes</h1>
        <table>
            <thead>
                <tr>
                    <th>Class Code</th>
                    <th>Class Name</th>
                    <th>Number of Credits</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>COP 3502C</td>
                    <td>Programming Fundamentals 1</td>
                    <td>4</td>
                    <td>First course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>COP 3503C</td>
                    <td>Programming Fundamentals 2</td>
                    <td>4</td>
                    <td>Second course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>COP 3530</td>
                    <td>Data Structures and Algorithm</td>
                    <td>3</td>
                    <td>Algorithm development using pseudo languages, basic program structures, program design techniques, storage and manipulation of basic data structures like arrays, stacks, queues, sorting and searching and string processing. Linked linear lists. Trees and multilinked structures.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>COT 3100</td>
                    <td>Applications of Discrete Structures</td>
                    <td>3</td>
                    <td>Covers the mathematics of discrete events; i.e., events that involve distinct elements, finite structures of distinct elements or finite sampled versions of continuous phenomena (such as movement).</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>CDA 3101</td>
                    <td>Introduction to Computer Organization</td>
                    <td>3</td>
                    <td>Organization of computing systems. Logical basis of computer structure. Machine representation of instructions and data, flow of control, and basic machine instructions. Assembly language programming.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>CEN 3031</td>
                    <td>Introduction to Software Engineering</td>
                    <td>3</td>
                    <td>Topics include software planning, specifications, coding, testing and maintenance. Gain experience in the team approach to large system development</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>CIS 4301</td>
                    <td>Information and Database Systems 1</td>
                    <td>3</td>
                    <td>First part of a two-course sequence that studies the essential concepts, principles and techniques of modern database systems. Topics include modeling and querying of data using conceptual data models as well as the development of a database application.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>CIS 4914</td>
                    <td>Senior Project</td>
                    <td>3</td>
                    <td>Involves completing a significant CISE-related project. Coordinate with the instructor and a project advisor, prepare a detailed technical report and deliver an oral presentation.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>CNT 4007</td>
                    <td>Computer Network Fundamentals</td>
                    <td>3</td>
                    <td>Fundamental concepts, principles, and standards of computer networks. Introduces topics in top-down approach, starting with the application layer in the OSI system architecture with a stronger focus on application, transport, and network layers.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>COP 4020</td>
                    <td>Programming Language Concepts</td>
                    <td>3</td>
                    <td>Introduces programming language principles, including language constructs, design goals, run-time structures, implementation techniques and exposure to a wide variety of programming paradigms.</td>
                </tr>
            </tbody>
        </table>
    <h1>        </h1>
    <h1>        </h1>
    <h1>        </h1>
    <ButtonComponent content="<- Back" cssClass='e-custom1' onClick={btnClickUFEngineering.bind(this)}></ButtonComponent>
    </div>
    )
};

export default UFCSEClasses;