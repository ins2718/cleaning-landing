import options from "@/app/options";
import QuestionAnswer from "./question-answer";

function FaqSection() {
    const { title, questions } = options.faq;
    return <div className="relative mb-[76px] pt-[50px] pb-0">
        <img className="absolute right-0 top-[40px] z-[-1]" src="/images/l8.svg" alt="decor leaf" />
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                {title}
            </h2>
            <div className="flex flex-col">
                {questions.map((questionInfo, i) => <QuestionAnswer key={i} {...questionInfo} />)}
            </div>
        </div>
    </div>;
}

export default FaqSection;