import options from "@/app/options";
import QuestionAnswer from "./question-answer";
import Section from "@/components/section";

function FaqSection() {
    const { title, questions } = options.faqSection;
    return <Section
        decorators={<img className="absolute right-0 top-[40px] z-[-1]" src="/images/l8.svg" alt="decor leaf" />}
        header={title}
        bodyWrapperClassName="flex flex-col"
    >
        {questions.map((questionInfo, i) => <QuestionAnswer key={i} {...questionInfo} />)}
    </Section>
}

export default FaqSection;