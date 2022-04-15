const MDXComponents = {
    p: (props) => <p {...props} className={styles.p} />,
    a: (props) => <a {...props} className={styles.link} />,
    h1: (props) => <h1 {...props} className={styles.postTitle} />,
};

export default MDXComponents;