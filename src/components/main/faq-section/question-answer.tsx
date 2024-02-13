import { useState } from "react";

type QuestionAnswerProps = {
    question: string;
    answer: string;
    answerInHtml?: boolean;
}

const classes = {
    closed: {
        main: "hover:shadow-[0px_11px_22px_rgba(69,75,84,0.08)]",
        arrow: "",
        answer: "py-0 max-h-0 overflow-y-hidden",
    },
    opened: {
        main: "shadow-[0px_11px_22px_rgba(69,75,84,0.08)]",
        arrow: "rotate-180",
        answer: "pb-[32px] pt-[10px] max-h-[250px] overflow-y-scroll",
    },
};

const defaultAnswerClassName = "leading-[1.45] text-[14px] text-black duration-500 ease-linear transition-all";

type AnswerHtmlProps = {
    className: string;
    html: string;
}

function AnswerHtml({ className, html }: AnswerHtmlProps) {
    return <div dangerouslySetInnerHTML={{ __html: html }} className={`${defaultAnswerClassName} ${className}`} />;
}

type AnswerTextProps = {
    className: string;
    text: string;
}

function AnswerText({ className, text }: AnswerTextProps) {
    return <div className={`${defaultAnswerClassName} ${className}`} >
        {text.split("\n").map((p, i) => <p key={i} className="mb-[20px] last:mb-0">
            <span className="font-normal">{p.trim()}</span>
        </p>)}
    </div>;
}

function QuestionAnswer({ question, answer, answerInHtml = false }: QuestionAnswerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const currentClasses = classes[isOpen ? "opened" : "closed"];
    return <div className={`relative pl-[56px] bg-white mb-[20px] ${currentClasses.main}`}>
        <div onClick={() => setIsOpen(!isOpen)} className="font-semibold text-[15px] leading-[20px] text-black flex items-center min-h-[50px] cursor-pointer">
            <div className="absolute size-[24px] left-[15px] top-[12px] bg-[#1b88d8] font-bold text-[13px] leading-[20px] text-white flex justify-center items-center rounded-[50%]">?</div>
            <div className={`absolute size-[10px] right-[15px] top-[15px] duration-500 transition-transform ${currentClasses.arrow}`}>
                <img src="/images/faq/arrow-down.svg" alt="arrow down" className="w-full h-auto" />
            </div>
            <p>{question}</p>
        </div>
        {answerInHtml ?
            <AnswerHtml className={currentClasses.answer} html={answer} /> :
            <AnswerText className={currentClasses.answer} text={answer} />}
    </div>;
}

export default QuestionAnswer;