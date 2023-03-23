
export class Favorites {
    constructor (root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries =[
            {
                login: 'maykbrito',
                name: 'Mayk Brito',
                public_repos:'76',
                followers: '12000'
            },
            {
                login: 'maykbrito',
                name: 'Mayk Brito',
                public_repos:'76',
                followers: '12000'
            }
        ]

       
       
    
    }
}

export class FavoritesView extends Favorites {
    constructor (root){
        super(root)

        thid.tbody = this.root.querySelector('table tbody');

      this.update()
    }

    createRow() {
        const tr = document.createElement ('tr')

        tr.innerHTML = `
        <tr>
        <td class="user">
            <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
            <a href="https://github.com/maykbrito" target="_blank">
              <p>Mayk Brito</p>
              <span>maykbrito</span>
            </a>
          </td>
          <td class="repositories">
            76
          </td>
          <td class="followers">
            9589
          </td>
          <td>
            <button class="remove">&times;</button>
          </td>
        </tr>

        <tr>
          <td class="user">
            <img src="https://github.com/diego3g.png" alt="Imagem de maykbrito">
            <a href="https://github.com/diego3g" target="_blank">
              <p>Diego Fernandes</p>
              <span>diego3g</span>
            </a>
          </td>
          <td class="repositories">
            48
          </td>
          <td class="followers">
            22503
          </td>
          <td>
            <button class="remove">&times;</button>
          </td>
      </tr>
        `

        return tr
    }


    update() {
        this.removeAllTr()
      
      
        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = ` http://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers


            
            
         this.tbody.append(row)
    })

    
    }

   

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
                
            });

    }


}