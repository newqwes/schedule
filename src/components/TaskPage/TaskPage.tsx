import React, {FC,useState} from 'react';
import TaskEditor from '../TaskEditor';
import ReactMarkdown from 'react-markdown';
import {EditFilled} from '@ant-design/icons';
import './TaskPage.scss';
  
 
   
type PropsType = {
    name:string;
    date:string;
    type:string;
    organizer:string;
    taskContent:string;
  }

  type StateType = {
    value: boolean;
}
  const TaskPage:FC<PropsType> = (props) =>{
    const {name, date, type, organizer, taskContent} = props;
    const [editStatus, setEditStatus] = useState(false);
    const [saveTaskContent, setSaveTaskContent] = useState(taskContent);
    const taskContentHtml = React.createElement(ReactMarkdown, {source: saveTaskContent});
    
    const handleClick = () => {
      setEditStatus(true);
    }

    const handleSave = (text:string) => {
      setSaveTaskContent(text);
      setEditStatus(false);
    }


    return(
        //mentor
        <div>
            <h1>{name}</h1>
            <div><b>Date:</b> {date}</div>
            <div><b>Type:</b> {type}</div>
            <div><b>Organizer:</b> {organizer}</div>
            { editStatus
                ? <div className="task-description">
                    <TaskEditor 
                      currTaskContent={saveTaskContent}
                      handleSave={handleSave}
                    />
                  </div>
                : <div className="task-description">
                    <div className="icons-list">
                      <EditFilled 
                        label="Edit"
                        onClick={handleClick}
                        />
                    </div>
                    <div>
                      {taskContentHtml}
                    </div>
                </div>
            }
        </div>
    )
}
export default TaskPage;