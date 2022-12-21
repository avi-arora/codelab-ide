import React from "react";
import Editor from "@monaco-editor/react";
import { Col, Container, Row } from "reactstrap";

const Ide = () => {
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
        <Container className="mt-5 pt-5">
            <Row>
                <Col>
                    <Editor
                        height="80vh"
                        defaultLanguage="python"
                        defaultValue="print('Hello, world')"
                        {...args}
                    />
                </Col>
            </Row>
        </Container>
    </>)
}

export default Ide;