import { useState } from "react";

function Contacts() {
    //username - переменная, хранящая значение состояния
    //setUsername - функция для изменения значения состояния
    //внутри useState указывается начальное значение для состояния username
    const [username, setUsername] = useState("");
    const [userage, setUserage] = useState("");
    const [usermail, setUsermail] = useState("");
    const [submited, setSubmited] = useState(false);//отправлены ли данные

    const handleSubmit = (e) => {
        e.preventDefault();
        // setUsername("");
        // setUserage("");
        // setUsermail("");
        setSubmited(true);
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center my-5">
            <h2>Контакты</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="username" className="form-label">Ваше имя: </label>
                    <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="userage" className="form-label">Ваш возраст: </label>
                    <input type="number" id="userage" className="form-control" value={userage} onChange={(e) => setUserage(e.target.value)} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="usermail" className="form-label">Ваша электронная почта: </label>
                    <input type="usermail" id="usermail" className="form-control" value={usermail} onChange={(e) => setUsermail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-outline-primary my-2">Отправить</button>
            </form>

            <div className="my-5">
                    <h5>Ваши данные: </h5>
                    <p className="fw-bold">Имя: <span>{username}</span></p>
                    <p className="fw-bold">Возраст: <span>{userage}</span></p>
                    <p className="fw-bold">Email: <span>{usermail}</span></p>
                </div>

            {submited ? (
                <div className="my-5">
                    <h5>Ваши данные: </h5>
                    <p className="fw-bold">Имя: <span>{username}</span></p>
                    <p className="fw-bold">Возраст: <span>{userage}</span></p>
                    <p className="fw-bold">Email: <span>{usermail}</span></p>
                </div>
            ) : (
                <></>
            )}
        </div>        
    )
}

export default Contacts;