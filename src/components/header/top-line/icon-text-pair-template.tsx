type RightSideItemTemplateProps = {
    topText: string;
    bottomText: string;
    icon: React.JSX.Element;
}

function RightSideItemTemplate({ topText, bottomText, icon }: RightSideItemTemplateProps) {
    return <div className="flex">
        <div>
            {icon}
        </div>
        <div>
            <p className="leading-relaxed">{topText}</p>
            <p className="font-bold leading-relaxed">{bottomText}</p>
        </div>
    </div>;
}

export default RightSideItemTemplate;