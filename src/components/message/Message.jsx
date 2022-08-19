import styles from './Message.module.scss';

export const Message = (props) => {
	return (
		<section className={styles.message}>
			<div className="container">
				<h1 className={styles.title + " title--h1"}>{props.message}</h1>
			</div>
		</section>
	);
}