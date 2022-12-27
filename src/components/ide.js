import React, {useState} from "react";
import Editor from "@monaco-editor/react";
import OutputWindow from "./outputWindow";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import CustomInput from "./CustomInput";
import { languageOptions } from "../constants/languageOptions";
import { classnames } from "../utils/general";
const Ide = () => {
    const [theme, setTheme] = useState("cobalt");
    const [customInput, setCustomInput] = useState();
    const [code, setCode] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [language, setLanguage] = useState(languageOptions[0]);

    const args = {
        "acceptSuggestionOnCommitCharacter": true,
        "acceptSuggestionOnEnter": "on",
        "accessibilitySupport": "auto",
        "autoIndent": false,
        "automaticLayout": true,
        "codeLens": true,
        "colorDecorators": true,
        "contextmenu": true,
        "cursorBlinking": "blink",
        "cursorSmoothCaretAnimation": false,
        "cursorStyle": "line",
        "disableLayerHinting": false,
        "disableMonospaceOptimizations": false,
        "dragAndDrop": false,
        "fixedOverflowWidgets": false,
        "folding": true,
        "foldingStrategy": "auto",
        "fontLigatures": false,
        "formatOnPaste": false,
        "formatOnType": false,
        "hideCursorInOverviewRuler": false,
        "highlightActiveIndentGuide": true,
        "links": true,
        "mouseWheelZoom": false,
        "multiCursorMergeOverlapping": true,
        "multiCursorModifier": "alt",
        "overviewRulerBorder": true,
        "overviewRulerLanes": 2,
        "quickSuggestions": true,
        "quickSuggestionsDelay": 100,
        "readOnly": false,
        "renderControlCharacters": false,
        "renderFinalNewline": true,
        "renderIndentGuides": true,
        "renderLineHighlight": "all",
        "renderWhitespace": "none",
        "revealHorizontalRightPadding": 30,
        "roundedSelection": true,
        "rulers": [],
        "scrollBeyondLastColumn": 5,
        "scrollBeyondLastLine": true,
        "selectOnLineNumbers": true,
        "selectionClipboard": true,
        "selectionHighlight": true,
        "showFoldingControls": "mouseover",
        "smoothScrolling": false,
        "suggestOnTriggerCharacters": true,
        "wordBasedSuggestions": true,
        "wordSeparators": "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
        "wordWrap": "off",
        "wordWrapBreakAfterCharacters": "\t})]?|&,;",
        "wordWrapBreakBeforeCharacters": "{([+",
        "wordWrapBreakObtrusiveCharacters": ".",
        "wordWrapColumn": 80,
        "wordWrapMinified": true,
        "wrappingIndent": "none",
        "theme": "vs-dark"
    }
    return (<>
        <div className="flex flex-row">
            <div className="px-4 py-2">
                <LanguageSelector />
            </div>
            <div className="px-4 py-2">
               <ThemeSelector theme={theme} handleThemeChange={() => {}}/>
            </div>
        </div>
        <div className="flex flex-row space-x-4 items-start px-4 py-4">
            <div className="flex flex-col w-full h-full justify-start items-end">
                <Editor
                    height="70vh"
                    defaultLanguage="python"
                    defaultValue="print('Hello, world')"
                    {...args}
                />
            </div>
            <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
                <OutputWindow></OutputWindow>
                <div className="flex flex-col items-end">
                    <CustomInput
                        customInput={customInput}
                        setCustomInput={setCustomInput}
                    />
                    <button
                        onClick={() => {}}
                        disabled={!code}
                        className={classnames(
                            "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                            !code ? "opacity-50" : ""
                        )}
                    >
                        {processing ? "Processing..." : "Compile and Execute"}
                    </button>
                </div>
                {outputDetails && <OutputDetails outputDetails={outputDetails} />}
            </div>
        </div>
    </>)
}

export default Ide;