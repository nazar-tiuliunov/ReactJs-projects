import React, { Component } from 'react'

export default class Form extends Component {
   render() {
      const { text, addTask, updateValue } = this.props;
      return (
         <form className="todo__form" onSubmit={(e) => { addTask(e) }}>
            <input className="todo__form_enterTask"
               type="text"
               required
               placeholder="Enter new task"
               value={text}
               onChange={(e) => { updateValue(e) }} />
         </form>
      )
   }
}