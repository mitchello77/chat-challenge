import { useAuth } from "hooks/useAuth";
import { useEffect, useRef, useState } from "react";


const MessageBubble = ({ message }) => {
	const { currentUser } = useAuth();
	const innerRef = useRef(null);
	const bubbleRef = useRef(null);
	const [hasReadMore, sethasReadMore] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const direction = (Number(currentUser.id) === Number(message.userID)) ? "mine" : "other";

	const onReadMore = () => {
		sethasReadMore(false);
		setExpanded(true);
	}

	useEffect(() => {
		if (hasReadMore) {
			setTimeout(() => {
				bubbleRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}, 0);
		}
	}, [hasReadMore]);

	useEffect(() => {
		if (innerRef.current !== null) {
			sethasReadMore(isOverflowing(innerRef.current));
		}
	}, [innerRef]);
	return (
		<div
			ref={bubbleRef}
			className={`message-bubble ${direction} ${expanded && 'expanded'} `}
		>
			<div className="inner" ref={innerRef}>
				{message.message}
			</div>
			{hasReadMore && (
				<div className="read-more" onClick={onReadMore}>
					Read more
				</div>
			)}
			
		</div>
	);
};


function isOverflowing(el)
{
   return el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
}


export default MessageBubble;
