import "../styles/CoursesPage.css";

export const CoursesPage = () => {
  return (
    <div className="course_page_wrapper">
      <h1 className="course_name">Название курса</h1>
      <p className="course_destination">Направление: <a className="course_dest_txt">Словарь</a></p>
      <div className="course_theory">
        <h1 className="course_theory_title">Прочитайте</h1>
        <div className="course_read">
          <div className="course_txt">
            {/* что-то на татарском (( */}
            <p>Гафу итегез, Сезгә кем кирәк?</p>
            <p>Миңа директор кирәк.</p>
            <p>Гафу итегез, Сезгә нәрсә кирәк?</p>
            <p>Миңа татарча-русча сүзлек кирәк.</p>
          </div>
          <div className="">
            <p>Извините, кто вам нужен?</p>
            <p>Мне нужен директор.</p>
            <p>Извините, что вам нужно?</p>
            <p>Мне нужен татарско-русский словарь.</p>
          </div>
        </div>
       
       <div className="course_bottom_block">

        <div className="course_questions">
          <h1 className="course_theory_title">Ответьте на вопросы</h1>
          <p>Гафу итегез, Сезгә кем кирәк? </p>
          <p>Сиңа нинди сүзлек кирәк? </p>
          <p>Аңа кем кирәк? </p>
          <p>Безгә бу диск кирәкме?</p>
          <p>Сезгә Зөлфия апа кирәкме? </p>
          <p>Сиңа ничә билет кирәк?</p>
          <p>Аларга русча-инглизча сүзлек кирәкме?</p>
          <p>Сорарга ярыймы, сезгә нәрсә кирәк?</p>
        </div>
        
        <div className="course_hint">
          <h1 className="course_theory_title">Шпаргалка</h1>
          <p>кем — кто?</p>
          <p>кайда — где?</p>
          <p>кайчан — когда?</p>
          <p>ничек — как?</p>
          <p>нинди — какой?</p>
          <p>кая — куда?</p>
          <p>кайдан — откуда?</p>
          <p>нәрсә — что? </p>

        </div>
      </div>

      </div>

      <button>Начать тест</button>
    </div>
  );
};
