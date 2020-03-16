const cart = {
    state: {
        cart: [],
        loading: false,
        order: {}
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push(item);
        },
        order(state, order) {
            state.order = order;
        }
    },
    actions: {
        async sendOrder(ctx) {
            ctx.state.loading = true;

            let order = {
            items: ctx.state.cart
            }
            
            const response = await new Promise((resolve) => {
            setTimeout(() => {
                order.orderNr = 'SW921389B'
                resolve(order);
            }, 2000)

            });

            ctx.state.loading = false;
            ctx.commit('order', response);
        }
    }
}

export default cart;