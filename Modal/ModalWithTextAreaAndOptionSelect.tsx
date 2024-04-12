import './modal.css'
export default function Modal() {
  return (
    <div className="modal-wrapper">
      <div className="modal">
    <form>
      <div>
        <label htmlFor="page">Page</label>
        <input name="page" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select name="status" id="">
          <option value="live">LIve</option>
          <option value="draft">Draft</option>
          <option value="error">Error</option>
        </select>
        </div>
      <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}
