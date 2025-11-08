import Ribbons from "../../components/Ribbons";
import TextPressure from "../../components/TextPressure";



export default function TextPressureComp() {
    return (
        <div style={{ position: 'relative', height: 'auto', width: '100%' }}>
            
            {/* Text on top */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
                <TextPressure
                    text="EFICSY"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#492efcff"
                    strokeColor="#03713eff"
                    minFontSize={36}
                    fontFamily="'Brandon Grotesque', sans-serif"
                />
            </div>
        </div>
    )
}