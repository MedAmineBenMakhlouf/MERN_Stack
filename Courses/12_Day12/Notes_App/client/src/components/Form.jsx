import React from 'react'

const Form = (props) => {
    console.log("FORM PROPS",props);
    const {note, setter, operation, errors} = props
    const formHandler = (e) => {
        e.preventDefault()
        console.log(note);
        operation(note)
    }
    return (
        <>
        <h1>Form</h1>
            <form onSubmit={formHandler}>
                <div className="form-group mb-3">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setter({ ...note, title: e.target.value })}
                        value={note.title}
                    />
                    {errors.title && <span className='text-danger h5'> {errors.title}</span>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Content</label>
                    <textarea className="form-control"
                        onChange={(e) => setter({ ...note, content: e.target.value })}
                        value={note.content}
                    ></textarea>
                    {errors.content && <span className='text-danger h5'> {errors.content}</span>}

                </div>
                <div className="form-group mb-3">
                    <input type="checkbox" className='form-check-input mx-3'
                        onChange={(e) => setter({ ...note, isImportant: e.target.checked })}
                        value={note.isImportant}
                    />
                    <label className='form-check-label'>Is Important ?</label>
                </div>
                <div className='text-center'>
                    <button className='btn btn-outline-primary w-50'>{props.children}</button>
                </div>
            </form>
        </>
    )
}

export default Form