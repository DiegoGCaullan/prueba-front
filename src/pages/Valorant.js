import { useState } from "react";
import { valorant } from "./arrayValorant";
import { RespuestasFetch } from "../api/RespuestasFetch";

const Valorant = () => {
  const [questions, setQuestions] = useState(valorant);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-d", "q2-a", "q3-b", "q4-a", "q5-b"];

  const handleChange = ({ target }) => {
    const nextState = questions.map((question) => {
      if (question.name !== target.name) {
        return question;
      }

      return {
        ...question,
        options: question.options.map((opt) => {
          const checked = opt.radioValue === target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
        currentAnswer: target.value,
      };
    });
    setQuestions(nextState);
  };

  // Controlo el envio del formulario
  const onSubmit = async (evt) => {
    evt.preventDefault();
    let counter = 0;
    let flag = false;

    for (const [index, question] of questions.entries()) {
      if (!question.currentAnswer) {
        flag = true;
        alert("Por favor responde la pregunta #" + (index + 1));
        break;
      } else {
        if (question.currentAnswer === answers[index]) {
          counter++;
        }
      }
    }

    if (!flag) {
      setTotal(counter);
      setSubmitted(true);

      // Creo formdata para obtener los datos del formulario
      const formData = {
        answers: questions.map((q) => q.currentAnswer),
        total: counter,
      };

      try {
        const response = await RespuestasFetch(formData);

        if (response.ok) {
          console.log("Respuestas guardadas correctamente");
        } else {
          console.error("Error al guardar respuestas");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Valorant</h1>
      <section>
        {submitted && (
          <div className="result">
            <h3>
              Obtuviste {total} de {answers.length} puntos
            </h3>
          </div>
        )}
        <form onSubmit={onSubmit}>
          {questions.map((question, idx) => (
            <div key={`group-${idx}`}>
              <h3>
                {idx + 1}. {question.questionText}
              </h3>
              {question.options.map((option, idx) => {
                return (
                  <div key={`option-${idx}`}>
                    <input
                      type="radio"
                      name={question.name}
                      value={option.radioValue}
                      checked={option.selected}
                      onChange={handleChange}
                    />
                    {option.choice}
                  </div>
                );
              })}
            </div>
          ))}
          <button className="sendInfo" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Valorant;
